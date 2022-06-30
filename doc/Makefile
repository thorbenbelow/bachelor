.PHONY: all doc clean dev
doc:
	@docker run --rm -i -v "$PWD":/data blang/latex:ubuntu ls -lAh && latexmk -cd -f -interaction=batchmode -pdf 000thesis.tex
clean:
	@fd -u -e log -e lot -e bst -e aux -e fls -e lof -e lot -e out -e toc -e fdb_latexmk -e gz -e 'run.xml' -e bcf -e bbl -e bcf -e blg -t f -X rm
