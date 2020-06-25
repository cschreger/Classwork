class EditAlbums < ActiveRecord::Migration[6.0]
  def change
    add_column :albums, :band_id, :integer, null: false
    add_column :albums, :live, :boolean, null: false

    add_index :albums, :band_id, unique: true
  end
end
