class CreateSelections < ActiveRecord::Migration
	def change
  	create_table :selections do |t|
    	t.integer :choice_id
    	t.integer :question_id
    	t.timestamps
    end
  end
end
