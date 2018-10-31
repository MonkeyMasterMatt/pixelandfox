module ApplicationHelper
    def default_url_options
  { host: ENV["HOST"] || "www.pixelandfox.com" }
  end
end
