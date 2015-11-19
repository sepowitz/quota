class QuotesController < ApplicationController

	def index
		@quotes = Quote.all.order(created_at: :desc)
	end

	def new
		@quote = Quote.new
	end

	def create
		@quote = Quote.new(post_params)
		if @quote.save
			redirect_to '/quotes'
		else 
			render :action => 'new'
	end
end

private

	def post_params
		params.require(:quote).permit(:author, :content)

	end
end