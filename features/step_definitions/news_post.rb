Given('I am on new page') do
  visit '/posts'
end

# When /^I fill in "([^"]*)" with "([^"]*)"$/ do |field, value|
#   fill_in(field, with: value)
# end

# When /^I press "([^"]*)"$/ do |name|
#   link(name)
# end

Then /^I should see "([^"]*)"$/ do |string|
  page.has_content?(string)
end