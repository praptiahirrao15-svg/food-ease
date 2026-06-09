import imageFallback from "../image-fallback.svg";

export function FoodCard({ food, quantity = 0, onAdd, onRemove }) {
  return (
    <div className="card">
      <div className="card-image">
        <img
          src={food.img}
          alt={food.name}
          onError={(event) => {
            if (event.currentTarget.src !== imageFallback) {
              event.currentTarget.src = imageFallback;
            }
          }}
        />
        <div className="card-badges">
          <span className={`badge ${food.type === "veg" ? "badge-veg" : "badge-nonveg"}`}>
            {food.type === "veg" ? "Veg" : "Non-Veg"}
          </span>
          {food.tags?.map((tag) => (
            <span className="tag-pill" key={tag}>
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="card-content">
        <div>
          <h3>{food.name}</h3>
          <p>{food.price}</p>
        </div>

        {quantity > 0 ? (
          <div className="quantity-control">
            <button type="button" onClick={() => onRemove(food.id)}>
              −
            </button>
            <span>{quantity}</span>
            <button type="button" onClick={() => onAdd(food.id)}>
              +
            </button>
          </div>
        ) : (
          <button type="button" className="add-button" onClick={() => onAdd(food.id)}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}
