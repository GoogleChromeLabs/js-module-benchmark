# Synthetic Module Benchmark

## Installation
To run this benchmark you need python and a local webserver, for instance
[local-web-server](https://www.npmjs.com/package/local-web-server) does the
trick.

## Basic Usage
1. Generate the modules: `rm -rf out/ && python3 ./gen.py`
2. Start webserver: `ws`
3. Benchmark app:
  ```
  testing/xvfb.py out/release/chrome http://localhost:8000/out/app-prefetch-0.html
  ```

The `out/` directory contains various version of the main app with different
degrees of module prefetching.

## Extended Usage
`gen.py` can be used with simple expansion rules to generate arbitrary trees.
Let's consider the following simple tree:

```
   A
 / | \
B  A  C
 / | \
B  A  C
```

It can be generated with `./get.py --depth=2 --rules="A:BAC"`.
Notes: 
 - `A` is the default starting axiom.
 - A module name consist of a single character other than `,` and `:`.

Additionally you can specify the size of each generated module with `--sizes`:

```
./get.py --depth=2 --rules="A:AB" --sizes="A:12k,B:1m,C:1k"
```
