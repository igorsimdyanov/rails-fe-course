require 'erb'

content = File.read('condition.erb')
puts ERB.new(content).result_with_hash(
                        speed: 80,
                        speed_limit: 100,
                        deviation: 20
                      )
