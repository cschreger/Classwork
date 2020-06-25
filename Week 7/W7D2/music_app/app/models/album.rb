# == Schema Information
#
# Table name: albums
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  band_id    :integer          not null
#  live       :boolean          not null
#
class Album < ApplicationRecord
    validates :title, :year, presence: true
    validates :live inclusion: {in: [true, false]}

    belongs_to :band,
        foreign_key: :band_id,
        class_name: 'Band'
end
