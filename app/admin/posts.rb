ActiveAdmin.register Post do
  permit_params :title, :content

  index do
    selectable_column
    id_column
    column :title
    column :content
    column :created_at
    actions
  end

  filter :title
  filter :content
  filter :created_at

  form do |f|
    f.inputs do
      f.input :title
      f.input :content
    end
    f.actions
  end
end
