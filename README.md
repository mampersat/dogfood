# Dog Food
Fly the kite with `node` and `postgres` in `docker`
- [x] docker
- [x] node
- [x] postgres
- [ ] connect to postgres
- [ ] read from a table (create table etc.)

## Testing
```
docker build -t dogfood/app .
docker-compose up
curl localhost:3000
```
Should return HTML representing first page of app