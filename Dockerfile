FROM mhart/alpine-node AS builder
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

FROM mhart/alpine-node
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
EXPOSE 3000
CMD ["serve", "-p", "80", "-s", "."]
