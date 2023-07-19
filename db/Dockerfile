FROM postgres:13

ENV POSTGRES_DB=user_db
ENV POSTGRES_USER=admin
ENV POSTGRES_PASSWORD=root

COPY init.sql ./docker-entrypoint-initdb.d/