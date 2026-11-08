"""Assemble the critical stylesheet into the static HTML. No dependencies."""
from pathlib import Path
import sys

root = Path(__file__).resolve().parent
template = (root / 'index.template.html').read_text(encoding='utf-8')
css = (root / 'style.css').read_text(encoding='utf-8')
page = template.replace('<!-- GAME_STYLE -->', '<style id="game-style">\n' + css + '\n</style>')
if '--check' in sys.argv:
    assert (root / 'index.html').read_text(encoding='utf-8') == page, 'Run python build.py'
else:
    (root / 'index.html').write_text(page, encoding='utf-8')
