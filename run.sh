curl -X POST -H "Content-Type: application/json" -d '{
  "query": "{ user(id: \"1\") { id name email } }"
}' http://localhost:3000/graphql
