require 'google_search_results' 

params = {
  api_key: "6681352881f290db8ec410f05bc6b9567276022001ad7812884fbac446d342d9",
  engine: "google",
  q: "Coffee",
  location: "Brazil",
  google_domain: "google.com",
  gl: "br",
  hl: "pt"
}

search = GoogleSearch.new(params)
hash_results = search.get_hash