streaming = ['netflix', 'hulu', 'disney+', 'appletv+']
platform1 = 'netflix'
platform2 = 'hulu'


for i in range(len(streaming)):
       if streaming[i] == platform1:
           print("Platform1 is found")
 
for i in range(len(streaming)):
       if streaming[i] == platform2:
           print("Platform2 is found")


def search(list, platform):
   for i in range(len(list)):
       if list[i] == platform:
           return True
   return False

if __name__ == "__main__":
  streaming = ['netflix', 'hulu', 'disney+', 'appletv+']
  platform1 = 'netflix'
  platform2 = 'hulu'

  print(f"Platform1 found: {search(streaming,platform1)}")
  print(f"Platform2 found: {search(streaming,platform2)}")