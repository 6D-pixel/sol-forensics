[x] get data for transactions
    [x] from helios api / vyper
    [] from dune / flipSide
[] process data for node and edges\
    [x] basic implementation done
    []  there are different types present like (swaps,etc...)
[x] display the data in the form of graph
[] Cluster the data using some algo available in graphology
[] label known wallets (some already has labels)
[x] there is some error in the input submit button need to fix first request is failing (react stat update is async)
[] features
    [] can use graphology lib to find other wallet inside the graph (graph.has('node'))
    [] zoom option for the graph
    [] render the graph like bubble map
# Backend
[x] Redis implementation caching using 'address' as key (2.5 s -> 18 ms)
[] fetch the size to render them according to the value