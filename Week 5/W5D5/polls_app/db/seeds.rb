# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
    User.destroy_all
    Question.destroy_all
    Poll.destroy_all
    Response.destroy_all
    AnswerChoice.destroy_all

    bob = User.create!(username: 'Bob')

    sam = User.create!(username: 'Sam')

    poll = Poll.create!(title: 'Woke Poll', author_id: bob.id)

    question_1 = Question.create!(text: 'How woke are you?', poll_id: poll.id)

    answer_choice_1 = AnswerChoice.create!(text: 'Super Woke', question_id: question_1.id)

    answer_choice_2 = AnswerChoice.create!(text: 'Kinda Woke', question_id: question_1.id)

    answer_choice_3 = AnswerChoice.create!(text: 'Not Woke', question_id: question_1.id)


    resp_1 = Response.create!(author_id: bob.id, answer_choice_id: answer_choice_2.id)

    resp_2 = Response.create!(author_id: sam.id, answer_choice_id: answer_choice_1.id)

end