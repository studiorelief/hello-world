import "./webflow-styles.css";

// Example function that can be called from Webflow
export function initWebflowWidget() {
  console.log("Webflow widget initialized");

  // Add your initialization logic here
  document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM loaded");
  });
}

// Example: Counter function
export function createCounter(elementId: string) {
  let count = 0;
  const element = document.getElementById(elementId);

  if (element) {
    const button = document.createElement("button");
    button.textContent = `Count: ${count}`;
    button.onclick = () => {
      count++;
      button.textContent = `Count: ${count}`;
    };
    element.appendChild(button);
  }
}

// Example: Form validator
export function validateForm(formId: string) {
  const form = document.getElementById(formId) as HTMLFormElement;
  if (form) {
    form.addEventListener("submit", (e) => {
      const inputs = form.querySelectorAll("input[required]");
      let isValid = true;

      inputs.forEach((input) => {
        if (!(input as HTMLInputElement).value) {
          isValid = false;
          input.classList.add("error");
        } else {
          input.classList.remove("error");
        }
      });

      if (!isValid) {
        e.preventDefault();
        alert("Please fill in all required fields");
      }
    });
  }
}

// Expose functions to global scope for Webflow
(window as any).webflowWidgets = {
  initWebflowWidget,
  createCounter,
  validateForm,
};
