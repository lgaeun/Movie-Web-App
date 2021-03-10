### Movie API with GraphQL

- overfetching: GET시 요청한 영역의 데이터보다 더 많은 정보를 서버에서 받는 것, 비효율적. 개발자들이 뭘 받았는 지 모르게 됌.
- underfetching: REST에서 하나를 완성하기 위해 많은 소스를 요청하는 것. 앱을 시작하기 위해 필요한 요청이 여러개인 경우
- GraphQL로 해결할 수 있는 문제. 하나의 쿼리로 해결 가능
  - URL로 받지X. 하나의 endpoint에서 받음!!
  - 쿼리를 백엔드에 보낸다: { graphQL 언어로 필요한 정보만을 요구} -> graphql 백엔드에 보내면
  - 정확히 요청한 정보들이 들어 있는 하나의 object로 응답받는다.
