class CreateMesseges < ActiveRecord::Migration[7.0]
  def change
    create_table :messeges do |t|
      t.text :greeting

      t.timestamps
    end
  end
end

Message.create(greeting: 'Hello, world!')
Message.create(greeting: 'Hi there!')
Message.create(greeting: 'Welcome to my app!')
Message.create(greeting: 'Hey, how are you?')
Message.create(greeting: 'Greetings!')
