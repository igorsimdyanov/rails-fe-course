describe 'the post page', type: :feature do
  let(:user) { create(:user) }
  let(:title) { 'Новость про новую версию Ruby' }

  before do
    login_as user
    visit new_post_path
  end

  it 'create new post' do
    find('#post_title').set(title)
    find_button('Create Post').click

    expect(Post.last.title).to eq title
  end
end
