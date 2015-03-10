class AddCompletionid < ActiveRecord::Migration
  def change
  	add_column :selections, :completion_id, :integer
  end
end
