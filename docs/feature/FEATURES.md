# Project Features: Solana Forensic Analysis Tool

This document outlines the core features and functionalities required for the Solana Forensic Analysis Tool, as defined by the project bounty requirements. The goal is to create a comprehensive tool for tracking and visualizing on-chain fund movements on the Solana blockchain.

## 1. Transaction Flow Analysis & Visualization

- **Transaction Flow Mapping:** Accurately map the flow of funds between Solana wallets based on transaction history.
- **Interactive Visualization:** Display transaction flows using interactive charts or diagrams for easy exploration.
- **Filtering:** Allow users to filter the visualized transaction flows based on criteria such as date ranges and transaction amounts.
- **Path Highlighting:** Implement functionality to highlight critical or significant transaction paths within the flow visualization.

## 2. Wallet Analysis

- **Funding Source Tracking:** Identify and trace the original sources of funds for any given Solana wallet address.
- **Complete Fund History:** Provide a comprehensive history detailing the origin and movement of funds associated with a wallet.
- **Activity Pattern Analysis:** Analyze transaction patterns associated with a wallet to identify typical behaviors or anomalies.
- **Entity Connections:** Show connections between the analyzed wallet and other wallets or known labeled entities.

## 3. Transaction Clustering

- **Transaction Grouping:** Automatically group transactions that appear related based on heuristics (e.g., timing, common counterparties, specific patterns).
- **Associated Wallet Identification:** Use clustering techniques to identify sets of wallets that are likely associated or controlled by the same entity.
- **Anomaly Detection:** Flag unusual or potentially suspicious transaction clusters or movements that deviate from normal patterns.

## 4. Entity Identification & Labeling

- **Known Entity Dataset:** Integrate and maintain a dataset of known Solana addresses associated with entities like exchanges, DeFi protocols, known illicit actors, etc.
- **Pattern Detection:** Implement algorithms to detect patterns indicative of interactions with known entity types (e.g., exchange deposit/withdrawal addresses).
- **Custom Labeling:** Provide a system for users (or maintainers) to apply custom labels to addresses or identified entities.

## 5. Core Platform Features & Requirements

- **Solana Mainnet Support:** All analysis capabilities must function correctly on the Solana Mainnet-Beta network.
- **Arbitrary Target Analysis:** The tool must support initiating analysis based on any user-provided Solana wallet address or transaction signature.
- **Web Interface:** Deliver a fully functional, live, deployed tool accessible via a user-friendly web interface.
- **Accuracy & Reliability:** Ensure data processing is accurate and the tool performs reliably under typical usage. (Reflects Judging Criteria)
- **Open Source:** All source code must be publicly available in a GitHub repository.
- **Comprehensive Documentation:** Provide clear documentation covering setup, usage, and potentially technical details.

# Implementation

[x] get data for transactions

- [] from dune / flipSide - [x] from helios api / vyper
  [x] display the data in the form of graph
  [x] there is some error in the input submit button need to fix first request is failing (react stat update is async)
  [x] zoom option for the graph
  [x] Graph layout and see if it can be done using workers
  [x] process data for node and edges\
   [x] basic implementation done
  [x] render the graph like bubble map
  [x] special color for user entered wallet
  [] there are different types present like (swaps,etc...)
  [] Cluster the data using some algo available in graphology
  [] label known wallets (some already has labels)
  [] can use graphology lib to find other wallet inside the graph (graph.has('node'))
- [x] adding graph event
  - [x] hover to view node data
        [] add link to solscan for the card [+]
        [] Drag and drop (low priority)
        [-] Change settings of the force graph and fa2 for the repel and see edges
        [x] filer based on user input Date, min sol
        [x] frontEnd changes
        [] connect with solana wallet

# Backend

[x] Redis implementation caching using 'address' as key (2.5 s -> 18 ms)
[-] fetch balance the size to render them according to the value

# bug

[x]web-worker not getting killed - i did't use kill() forgot '()' (use eslint in future) - the kill() removed to worker and it when i choose the graph type 'fa2||..' error worker layout killed used stop() instead
[] fix valkey catch ip addres to vercel only
[] update docs
[] make video for the site