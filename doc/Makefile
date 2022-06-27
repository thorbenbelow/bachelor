.PHONY: all doc clean
doc:
	@docker run --rm -i --user="$(id -u):$(id -g)" --net=none -v "$PWD":/data blang/latex:ubuntu latexmk -cd -f -interaction=batchmode -pdf 000thesis.tex
clean:
	fd -u -e log -e lot -e bst -e aux -e fls -e lof -e lot -e out -e toc -e fdb_latexmk -t f -X rm