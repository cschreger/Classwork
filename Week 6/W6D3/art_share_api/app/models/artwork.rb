class Artwork < ApplicationRecord

    validates :title, :artist_id, :image_url, presence: true
    validates :image_url, uniqueness: true
    validates :title, uniqueness: {scope: :artist_id}

    belongs_to :artist,
        foreign_key: :artist_id,
        class_name: 'User'

    has_many :shared_viewers
        through: :artwork_shares,
        source: :viewer




end