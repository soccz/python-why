#!/usr/bin/env python3
"""Concatenate + minify JS sources into bundle.min.js.

Run from any directory:
    python3 /mnt/20t/study/self_python/python-why/js/build.py
"""
import os
import sys

HERE = os.path.dirname(os.path.abspath(__file__))
SOURCES = ['nav.js', 'highlight.js', 'code-copy.js', 'spoiler.js']
OUT = os.path.join(HERE, 'bundle.min.js')

try:
    sys.path.insert(0, '/home/soccz/.local/lib/python3.10/site-packages')
    import jsmin
except ImportError:
    sys.exit('ERROR: pip install --user jsmin')


def main():
    combined = '\n'.join(open(os.path.join(HERE, s)).read() for s in SOURCES)
    minified = jsmin.jsmin(combined)
    with open(OUT, 'w') as f:
        f.write(minified)
    print(f'bundle.min.js: {len(minified)} bytes ({len(combined)} source)')


if __name__ == '__main__':
    main()
