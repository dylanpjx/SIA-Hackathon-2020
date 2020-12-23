let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/projects/SIA/client/src/components
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +63 Headerbar.js
badd +49 BagTable.js
badd +53 FilterButton.js
badd +139 ~/projects/SIA/client/src/App.js
badd +6 ~/projects/SIA/api/routes/testAPI.js
badd +12 ~/projects/SIA/api/routes/data.json
badd +4 ~/.config/nvim/init.vim
badd +33 ~/.config/nvim/plugins.vim
badd +77 ~/projects/todo-kanban/src/helpers/Editable.js
badd +181 ~/projects/todo-kanban/src/App.js
badd +1 ~/projects/todo-kanban/src/index.css
badd +8 ~/projects/todo-kanban/src/index.js
argglobal
%argdel
$argadd ~/projects/todo-kanban/src/index.css
set stal=2
edit ~/projects/SIA/client/src/App.js
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd w
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe 'vert 1resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 2resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 3resize ' . ((&columns * 69 + 104) / 209)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 111 - ((24 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
111
normal! 04|
wincmd w
argglobal
if bufexists("Headerbar.js") | buffer Headerbar.js | else | edit Headerbar.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 41 - ((22 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
41
normal! 09|
wincmd w
argglobal
if bufexists("FilterButton.js") | buffer FilterButton.js | else | edit FilterButton.js | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 35 - ((2 * winheight(0) + 23) / 46)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
35
normal! 033|
wincmd w
exe 'vert 1resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 2resize ' . ((&columns * 69 + 104) / 209)
exe 'vert 3resize ' . ((&columns * 69 + 104) / 209)
tabedit BagTable.js
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 17 - ((10 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
17
normal! 0
tabedit ~/projects/todo-kanban/src/App.js
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 181 - ((29 * winheight(0) + 22) / 44)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
181
normal! 0
tabedit ~/projects/todo-kanban/src/index.css
set splitbelow splitright
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
argglobal
1argu
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 5 - ((4 * winheight(0) + 21) / 42)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
5
normal! 024|
tabnext 1
set stal=1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFc
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
