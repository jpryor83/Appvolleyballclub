/*
  App Volleyball Club: site content
  ---------------------------------
  Most things you will want to change live in this one file.
  Entries marked  sample: true  show a small "Sample" tag on the site.
  Delete the sample entries (or the sample: true line) once you add real ones.
*/

window.SITE = {
  name: "App Volleyball Club",
  location: "Boone, NC and the High Country",

  // EDIT: the club's real contact email and phone
  email: "info@appvolleyballclub.com",
  phone: "",

  // EDIT: create a free form at formspree.io, then paste its URL here.
  // Until you do, the sign-up form opens an email to the address above instead.
  formEndpoint: "https://formspree.io/f/XXXXXXXX",

  social: {
    facebook: "https://www.facebook.com/appvolleyballclub/",
    instagram: "https://www.instagram.com/appvolleyballclub/"
  },

  // EDIT: confirm ages, levels and details with Kim
  programs: [
    {
      name: "Club teams",
      who: "Ages and levels to be confirmed",
      text: "Teams that practice together every week and play in regional tournaments. Every player gets real playing time and real coaching.",
      link: "#join",
      cta: "Ask about a team"
    },
    {
      name: "Camps and clinics",
      who: "All ages and experience levels",
      text: "Short, focused sessions on passing, setting, hitting, serving and defense. A good way to try the club or sharpen one skill.",
      link: "#events",
      cta: "See upcoming dates"
    },
    {
      name: "Small-group and private training",
      who: "Players who want extra reps",
      text: "Work on the exact skills a player wants to improve, with coaching that stays patient and positive.",
      link: "#join",
      cta: "Request training"
    },
    {
      name: "Tryouts and open gyms",
      who: "New to volleyball? Start here",
      text: "Come see how we coach. No experience required. We care about effort, attitude and willingness to learn.",
      link: "#join",
      cta: "Register for tryouts"
    }
  ],

  // EDIT: paste a Stripe Payment Link (or Square, PayPal, etc.) into each url.
  // Leave url empty and the button shows "Link coming soon".
  // amount is optional text such as "$75". Leave "" to hide it.
  payments: [
    { name: "Tryout fee", text: "One-time fee to attend club tryouts.", amount: "", url: "" },
    { name: "Club dues", text: "Season dues for club team players.", amount: "", url: "" },
    { name: "Camp or clinic registration", text: "Reserve a spot in an upcoming camp or clinic.", amount: "", url: "" },
    { name: "Tournament fees", text: "Entry and travel costs for tournament weekends.", amount: "", url: "" }
  ],

  // EDIT: the "Next level" section. One entry per player who went on to college volleyball.
  // photo: put the image in assets/alumni/ and use e.g. "assets/alumni/jane-doe.jpg"
  // level: NCAA D1, NCAA D2, NCAA D3, NAIA, JUCO, or Club
  alumni: [
    {
      name: "Sample Player",
      classYear: 2024,
      highSchool: "Your high school",
      college: "Your college name",
      level: "NCAA D1",
      position: "Outside hitter",
      photo: "",
      note: "A short line about the player's time at the club.",
      sample: true
    },
    {
      name: "Sample Player",
      classYear: 2023,
      highSchool: "Your high school",
      college: "Your college name",
      level: "NCAA D3",
      position: "Libero",
      photo: "",
      note: "",
      sample: true
    },
    {
      name: "Sample Player",
      classYear: 2022,
      highSchool: "Your high school",
      college: "Your college name",
      level: "NAIA",
      position: "Setter",
      photo: "",
      note: "",
      sample: true
    }
  ],

  // EDIT: upcoming dates. Past dates hide themselves automatically.
  events: [
    { date: "2026-11-14", title: "Open gym and tryout preview", place: "Boone, NC (gym to be announced)", text: "Come play, meet the coaches and ask questions.", sample: true },
    { date: "2026-12-05", title: "Club tryouts", place: "Boone, NC (gym to be announced)", text: "Register on this page before you come.", sample: true },
    { date: "2027-01-16", title: "Skills clinic", place: "Boone, NC (gym to be announced)", text: "Passing, serving and defense fundamentals.", sample: true }
  ],

  // EDIT: confirm every line of this with Kim
  staff: [
    {
      name: "Kim Pryor",
      role: "Club director and head coach",
      photo: "assets/kim-pryor.jpg",
      bio: [
        "Kim Pryor leads App Volleyball Club and is the head volleyball coach at Watauga High School. She was named North Carolina Class 6A Coach of the Year by the NCVBCA, and she has been voted conference Coach of the Year more than once.",
        "She has spent her career opening doors to the sport in the High Country, including starting the Watauga boys' volleyball program and a freshman team. Her coaching begins with character. Fun, skill and a lasting love of the game grow from there."
      ]
    }
  ],

  // EDIT: add photos to assets/photos/ and list them here.
  // Photos that are missing are skipped, so nothing looks broken.
  photos: [
    { src: "assets/photos/team-1.jpg", alt: "App Volleyball Club players celebrating a point" },
    { src: "assets/photos/team-2.jpg", alt: "Players warming up before a match" },
    { src: "assets/photos/team-3.jpg", alt: "Coach Kim Pryor talking with the team" },
    { src: "assets/photos/team-4.jpg", alt: "A player attacking at the net" },
    { src: "assets/photos/team-5.jpg", alt: "Team photo after a tournament" },
    { src: "assets/photos/team-6.jpg", alt: "Players cheering from the bench" }
  ]
};
