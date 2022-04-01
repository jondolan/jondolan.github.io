build:
	docker run --rm -it -v $(PWD):/src klakegg/hugo:0.93.2

server:
	docker run --rm -it -v $(PWD):/src -p 127.0.0.1:1313:1313 klakegg/hugo:0.93.2 server

server_all:
	docker run --rm -it -v $(PWD):/src -p 1313:1313 klakegg/hugo:0.93.2 server

post:
	docker run --rm -it -v $(PWD):/src -p 1313:1313 klakegg/hugo:0.93.2 new posts/$(POST)

command:
	docker run --rm -it -v $(PWD):/src klakegg/hugo:0.93.2 $(COMMAND)
