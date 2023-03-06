FROM node:16 AS base
WORKDIR /usr/src

# Stage1: UI Build
FROM base AS client-build
COPY client/ .
RUN npm install --force && npm run build

# Stage2: API Build
FROM base AS api-build
ENV ENVIRONMENT=production
COPY api/ .
RUN npm install && npm run build

# Stage3: Packaging the app
FROM base AS final
COPY --from=client-build /usr/src/build/ client/build/
COPY --from=api-build /usr/src/dist .
RUN ls

EXPOSE 80

CMD ["node", "api.bundle.cjs"]