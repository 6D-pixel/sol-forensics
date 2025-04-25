[x] get data for transactions
- [] from dune / flipSide
    - [x] from helios api / vyper
[x] display the data in the form of graph
[x] there is some error in the input submit button need to fix first request is failing (react stat update is async)
[x] zoom option for the graph
[x] Graph layout and see if it can be done using workers
[] process data for node and edges\
 [x] basic implementation done
[x] render the graph like bubble map
[x] special color for user entered wallet
[] there are different types present like (swaps,etc...)
[] Cluster the data using some algo available in graphology
[] label known wallets (some already has labels)
[] features
[] can use graphology lib to find other wallet inside the graph (graph.has('node'))
- [] adding graph event
  - [x] hover to view node data
    [] add link to solscan for the card
    [] Drag and drop (low priority)
    [] Change settings of the force graph and fa2 for the repel and see edges

# Backend

[x] Redis implementation caching using 'address' as key (2.5 s -> 18 ms)
[] fetch balance the size to render them according to the value

# Project setup

    start redis docker instance
    pnpm run dev

# bug

[x]web-worker not getting killed - i did't use kill() forgot '()' (use eslint in future) - the kill() removed to worker and it when i choose the graph type 'fa2||..' error worker layout killed used stop() instead
