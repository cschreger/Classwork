# create_table "shortened_urls", force: :cascade do |t|
#     t.string "short_url", null: false
#     t.string "long_url", null: false
#     t.integer "user_id", null: false
#     t.datetime "created_at", null: false
#     t.datetime "updated_at", null: false
#     t.index ["short_url"], name: "index_shortened_urls_on_short_url", unique: true
#     t.index ["user_id"], name: "index_shortened_urls_on_user_id"
#   end


class ShortenedUrl < ApplicationRecord

    def self.random_code
      include SecureRandom
        new_url = SecureRandom.urlsafe_base64

        while ShortenedUrl.exists?(short_url: new_url)
            new_url = SecureRandom.urlsafe_base64
        end
        
        new_url
    end



    def self.make(url, user)
        ShortenedUrl.create!(short_url: ShortenedUrl.random_code, long_url: url, user_id: user)
    end

    belongs_to :submitter,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :User 
end