export function ChefSection() {
  const chefs = [
    {
      name: "Chef Rahul",
      role: "South Indian Expert",
      signature: "Masala Dosa with coconut chutney",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Chef Priya",
      role: "Chinese Specialist",
      signature: "Szechuan noodles with crisp greens",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Chef Aman",
      role: "Italian Cuisine",
      signature: "Truffle mushroom pizza masterpiece",
      img: "https://randomuser.me/api/portraits/men/12.jpg",
    },
  ];

  return (
    <section className="chef-section">
      <div className="container section-heading">
        <p className="eyebrow">Our kitchen masters</p>
        <h2>👨‍🍳 Meet Our Chefs</h2>
      </div>

      <div className="container chef-container">
        {chefs.map((chef) => (
          <div className="chef-card" key={chef.name}>
            <div className="chef-portrait">
              <img src={chef.img} alt={chef.name} />
              <div className="chef-overlay">
                <p>{chef.signature}</p>
              </div>
            </div>
            <h3>{chef.name}</h3>
            <p>{chef.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
