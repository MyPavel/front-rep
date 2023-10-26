# No function example
if __name__ == "__main__":
  person1_name = "Max"
  person1_age  = 19
  person1_sex  = 'M'
  person1_height = 180
  person1_weight = 75

  person2_name = "July"
  person2_age  = 17
  person2_sex  = 'W'
  person2_height = 170
  person2_weight = 60

  print(f"person 1: {person1_name}")
  print(f"person 2: {person2_name}")

# Example with function
class Person:
    def __init__(self, name, age, sex, height, weight) -> None:
        self.name = name
        self.age = age
        self.sex = sex
        self.height = height
        self.weight = weight

if __name__ == "__main__":
  person1 = Person("Max",  19, 'M', 180, 75)
  person2 = Person("July", 17, 'W', 170, 60)

  print(f"person 1 name: {person1.name}")
  print(f"person 1 sex: {person1.sex}")