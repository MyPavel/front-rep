import re

str = '3 tovara'
pat = r'\d+. \d'

match = re.search(pat, str)

print(match)