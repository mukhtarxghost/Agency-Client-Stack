function InvoiceItems({ items, setInvoice }) {
  const addItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: Date.now(),
          description: "",
          quantity: 1,
          rate: 0,
        },
      ],
    }));
  };

  const removeItem = (id) => {
    if (items.length === 1) return;

    setInvoice((prev) => ({
      ...prev,
      items: prev.items.filter((item) => item.id !== id),
    }));
  };

  const updateItem = (id, field, value) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id
          ? {
              ...item,
              [field]:
                field === "description"
                  ? value
                  : Number(value),
            }
          : item
      ),
    }));
  };

  return (
    <div className="form-section items-section">
      <div className="section-header">
        <div className="section-title">Items</div>

        <button
          type="button"
          className="add-item-btn"
          onClick={addItem}
        >
          + Add Item
        </button>
      </div>

      <div className="items-header">
        <span>DESCRIPTION</span>
        <span>QTY</span>
        <span>RATE</span>
        <span>AMOUNT</span>
        <span></span>
      </div>

      <div className="items-list">
        {items.map((item) => {
          const amount = item.quantity * item.rate;

          return (
            <div className="item-row" key={item.id}>
              <input
                type="text"
                placeholder="Item or service"
                value={item.description}
                onChange={(e) =>
                  updateItem(
                    item.id,
                    "description",
                    e.target.value
                  )
                }
              />

              <input
                type="number"
                min="1"
                value={item.quantity}
                onChange={(e) =>
                  updateItem(
                    item.id,
                    "quantity",
                    e.target.value
                  )
                }
              />

              <input
                type="number"
                min="0"
                step="0.01"
                value={item.rate}
                onChange={(e) =>
                  updateItem(
                    item.id,
                    "rate",
                    e.target.value
                  )
                }
              />

              <div className="item-amount">
                ₹{amount.toFixed(2)}
              </div>

              <button
                type="button"
                className="remove-item-btn"
                onClick={() => removeItem(item.id)}
                disabled={items.length === 1}
                title="Remove item"
              >
                ×
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default InvoiceItems;