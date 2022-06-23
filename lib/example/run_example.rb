require 'erb'

content = File.read('example.erb')
puts ERB.new(content).result_with_hash(title: 'Hello, world!')
