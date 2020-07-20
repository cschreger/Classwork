@pokemon.each do |poke|
  json.set! poke.id do # normalized state (nested) ## {1 { poke.id: 1, name: Bulbasaur, image:} 2{id: 2,  name: Ivysaur, image: }
    json.extract! poke, :id, :name
    json.image_url asset_path("pokemon_snaps/#{poke.image_url}")
  end
end