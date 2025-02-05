docker run --rm -p 5647:8080 -e SWAGGER_JSON=/docs/api.yaml -v $(pwd)/api:/docs swaggerapi/swagger-ui

# docker run -it --rm -p 5646:80 \
#   -v $(pwd)/api:/usr/share/nginx/html/swagger/ \
#   -e SPEC_URL=swagger/bundle.yaml \
#   -e REDOC_OPTIONS="side-nav-style=path-only" \
#   redocly/redoc
  