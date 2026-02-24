# How Consistent Hashing Helps Netflix Scale User Data

Netflix manages reads and writes from millions of users at once, including resume playback, watch history updates, and personalization signals.

Netflix uses consistent hashing, which is frequently used in systems like **Apache Cassandra**, to distribute this data across database nodes in a reliable manner.

## The Issue with Basic Sharding

Users are distributed in this way by a naive approach:
shard = hash(user_id) % N
This only functions if there is a constant number of nodes (N).

In systems of production:

- In order to scale, nodes are added.  
- Nodes malfunction  
- Over time, clusters expand.

If N shifts from 4 to 5:
Nearly all of the keys remap.

This results in:

- Rearranging data on a large scale  
- spikes in the network  
- invalidation of the cache  
- Unstable latency  

The cost of redistribution becomes proportional to the entire dataset: **O(K)**.
This is unacceptable at the scale of Netflix.

## The Model of Consistent Hashing

Dependency on N is eliminated by consistent hashing.

This is how it operates:

- On a logical hash ring, nodes are positioned.  
- Partition keys are hashed onto the same ring, such as user_id.  
- The first node in a clockwise direction is assigned to each key.

Upon adding a node:

- It assumes control of a small area.  
- In that area, only keys move.

When a node malfunctions:

- Only the region it owns is redistributed.

The **cost of redistribution** is roughly **O(K/N)**.
Instead of being disruptive, scaling becomes incremental.

## How It's Used by Netflix

User_id is used to partition user-centric data:
hash(user_id) → owning node → ring position

This guarantees:

- Equitable allocation  
- Routing that is deterministic  
- Consistent performance while scaling  

The load is already distributed throughout the cluster when traffic increases during a significant release.
There is no need for a global reshuffle.

## Virtual Nodes: Enhancing Equilibrium

Token ownership may be uneven if each physical node appears on the ring only once.

Virtual nodes, or **vnodes**, are used by Netflix:

- Multiple tokens are owned by each physical node.  
- There are numerous tiny areas within the hash space.  
- These areas are dispersed throughout nodes.

Benefits :

- Improved load balancing  
- Even redistribution in the event of failure  

If one node malfunctions:

- Its tiny areas are divided among several nodes.  
- No one machine can handle the entire load.

## The Significance of This Design

The infrastructure of Netflix is dynamic:

- Nodes scale up and down.  
- Hardware malfunctions  
- Traffic varies  

The system needs to ensure:

- Very little data movement  
- Consistent scaling behavior  
- Consistent performance even when topology changes  

Consistent hashing provides  **bounded redistribution** and **deterministic placement**.
Large-scale distributed systems can function without interruption because of this stability.

## Core Takeaway

Consistent hashing is not just about distributing data.

It is about **controlling the cost of change**.

In large distributed systems like Netflix, that control is the difference between instability and scalable growth.
