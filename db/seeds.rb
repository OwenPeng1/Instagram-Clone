# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Comment.destroy_all
Photo.destroy_all
User.destroy_all

owen = User.create(name: "Owen Peng",
                username: "OPeng",
                password: "Peng",
                bio: "Software Engineer",
                profile: "https://quillandquire.com/wp-content/uploads/2019/08/Simu-Liu-Photo-Credit-Hayley-Andoff.jpg",
                )

jayson = User.create(name: "Jayson Tatum",
                username: "JTatum",
                password: "Peng",
                bio: "St.Louis born and raised",
                profile: "https://celebnetworth.net/wp-content/uploads/2020/11/Jayson-Tatum-Bio-1024x768.jpg")

steph = User.create(name: "Stephen Curry",
                username: "SCurry",
                password: "Peng",
                bio: "Greatest 3 Point Shooter of all time",
                profile: "http://cdn.chatsports.com/thumbnails/5993-76171-original.jpeg")

lebron = User.create(name: "Lebron James",
                username: "LJames",
                password: "Peng",
                bio: "Jordan played during a talent glut",
                profile: "https://static.highsnobiety.com/thumbor/eamsHEgOsqwMKvzVtNwCmS-X7eQ=/fit-in/1200x720/smart/static.highsnobiety.com/wp-content/uploads/2020/02/21160908/lebron-james-uninterrupted-sued-feature.jpg")

kawhi = User.create(name: "Kawhi Leonard",
                username: "KLeonard",
                password: "Peng",
                bio: "Fun Guy",
                profile: "https://s.yimg.com/uu/api/res/1.2/jMV24xlUjWdWd65qIsq7nw--~B/aD0zNjQ4O3c9NTQ3MjtzbT0xO2FwcGlkPXl0YWNoeW9u/https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-images/2019-11/e5f8c020-0036-11ea-9fd7-86e1dea14a5d")

warmup = Photo.create(photo: "https://www.bostonherald.com/wp-content/uploads/migration/2018/04/11/041118celticssc003.jpg?w=879",
                    caption: "Ready",
                    user_id: jayson.id,
                    )

Comment.create(text: "You ready to get beat?",
                user_id: steph.id,
                photo_id: warmup.id)

Comment.create(text: "Good Luck Youngblood",
                user_id: lebron.id,
                photo_id: warmup.id)
    
olympics = Photo.create(photo: "https://d1l5jyrrh5eluf.cloudfront.net/wp-content/uploads/2019/08/GettyImages-1160078389.jpg",
                caption: "Olympics Bound",
                user_id: jayson.id,
                )

Comment.create(text: "Glad to have you on the team",
            user_id: steph.id,
            photo_id: olympics.id)

Comment.create(text: "Lets go USA",
            user_id: kawhi.id,
            photo_id: olympics.id)

smile = Photo.create(photo: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F20%2F2022%2F05%2F10%2Fsteph-curry-2.jpg&q=60",
            caption: "Another Half-Courter",
            user_id: steph.id,
            )

Comment.create(text: "You Lying",
        user_id: jayson.id,
        photo_id: smile.id)

Comment.create(text: "You cocky huh?",
        user_id: lebron.id,
        photo_id: smile.id)
    
point = Photo.create(photo: "https://images2.minutemediacdn.com/image/fetch/w_2000,h_2000,c_fit/https://bluemanhoop.com/files/2016/04/stephen-curry-nba-san-antonio-spurs-golden-state-warriors-1.jpg",
        caption: "Finals Ready",
        user_id: steph.id
        )

Comment.create(text: "See you there",
    user_id: jayson.id,
    photo_id: point.id)

Comment.create(text: "Should've been there",
    user_id: lebron.id,
    photo_id: point.id)

excited = Photo.create(photo: "https://e0.365dm.com/20/10/1600x900/skysports-lebron-james-los-angeles-lakers_5136339.jpg?20201012092453",
    caption: "Hype for next season",
    user_id: lebron.id,
    )

Comment.create(text: "Ready to lock you up",
user_id: kawhi.id,
photo_id: excited.id)

Comment.create(text: "After I win this chip",
user_id: steph.id,
photo_id: excited.id)

championship = Photo.create(photo: "https://www.essence.com/wp-content/uploads/2016/06/1466442237/Screen%20Shot%202016-06-20%20at%201.02.30%20PM.png",
    caption: "My championship and the NBA finals MVP",
    user_id: lebron.id
    )

Comment.create(text: "Beautiful Family",
user_id: kawhi.id,
photo_id: championship.id)

Comment.create(text: "You're an amazing father",
user_id: jayson.id,
photo_id: championship.id)

shoes = Photo.create(photo: "https://i0.wp.com/weartesters.com/wp-content/uploads/2019/05/New-Balance-OMN1s-and-997-Kawhi-2-way-Pack-1.jpg?resize=1080%2C608&ssl=1",
    caption: "Check out my new shoes",
    user_id: kawhi.id
    )

Comment.create(text: "It's not the shoes",
user_id: steph.id,
photo_id: shoes.id)

Comment.create(text: "Check out the Leborns too",
user_id: lebron.id,
photo_id: shoes.id)

joke = Photo.create(photo: "https://s7d2.scene7.com/is/image/TWCNews/Raptors_Media_Day_Basketball_73509",
    caption: "Why did the chicken cross the road",
    user_id: kawhi.id,
    )

Comment.create(text: "To lose in the first round",
user_id: lebron.id,
photo_id: joke.id)

Comment.create(text: "You got jokes?",
user_id: jayson.id,
photo_id: joke.id)

selfie = Photo.create(photo: "https://pbs.twimg.com/media/Cvls_10WEAAaqdy.jpg",
    caption: "Post Workout",
    user_id: owen.id,
    )

Comment.create(text: "Looking Big Owen!",
user_id: lebron.id,
photo_id: selfie.id)

Comment.create(text: "Who's your trainer?",
user_id: jayson.id,
photo_id: selfie.id)

Comment.create(text: "Tryna get like you",
user_id: steph.id,
photo_id: selfie.id)

Comment.create(text: "Didn't know you had a sixpack",
user_id: kawhi.id,
photo_id: selfie.id)

