# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord

    validates :user_name, :session_token, :password_digest, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }
    after_initialize :ensure_session_token

    attr_reader :password

    has_many :cats,
        foreign_key: :user_id,
        class_name: :Cat

    has_many :rental_requests,
        foreign_key: :user_id,
        class_name: 'CatRentalRequest'


    def self.find_by_credentials(user_name, password)
        user = User.find_by(user_name: user_name)
        return nil unless user && user.is_password?(password)
        user
    end

    def reset_session_token!
        self.session_token = User.generate_session_token
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        bc_password = BCrypt::Password.create(self.password_digest)
        bc_password.is_password?(password)
    end


    private

    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def ensure_session_token
      self.session_token ||= User.generate_session_token
    end

end
