from enum import Enum


class CourseStatusEnum(Enum):
    ACTIVE = "Active"
    INACTIVE = "Inactive"
    DECLINED = "Declined"
    UNDER_REVIEW = "Under Review"

    @classmethod
    def choices(cls):
        return tuple((i.name, i.value) for i in cls)


class CourseTypesEnum(Enum):
    SHORT_COURSE = "Short Course"
    BOOTCAMP = "Bootcamp"
    MASTERCLASS = "Masterclass"

    @classmethod
    def choices(cls):
        return tuple((i.name, i.value) for i in cls)


USER_ROLE_CHOICES = (
    ("Admin", "Admin"),
    ("Student", "Student"),
    ("Instructor", "Instructor"),
    ("Freelancer", "Freelancer"),
)


class GenderEnum(Enum):
    MALE = "Male"
    FEMALE = "Female"

    @classmethod
    def choices(cls):
        return tuple((i.name, i.value) for i in cls)
