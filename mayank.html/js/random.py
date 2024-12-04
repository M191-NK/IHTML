import requests

# Making a GET request
r = requests.get('https://mail.google.com/mail/u/0/#inbox')

# check status code for response received
# success code - 200
print(r)

# print content of request
print(r.content)