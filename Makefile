build:
	docker run --rm -it -v $(PWD):/src klakegg/hugo:0.93.2-busybox

server:
	docker run --rm -it -v $(PWD):/src -p 127.0.0.1:1313:1313 klakegg/hugo:0.93.2-busybox server

server_all:
	docker run --rm -it -v $(PWD):/src -p 1313:1313 klakegg/hugo:0.93.2-busybox server

post:
	docker run --rm -it -v $(PWD):/src -p 1313:1313 klakegg/hugo:0.93.2-busybox new posts/$(POST)

command:
	docker run --rm -it -v $(PWD):/src klakegg/hugo:0.93.2-busybox $(COMMAND)
