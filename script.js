function getQueryParam(key) {
  const params = new URLSearchParams(window.location.search);
  return params.get(key);
}

function toTitleCase(input) {
  return input
    .split(' ')
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function autofillRequestedDemo() {
  const field = document.querySelector('[data-autofill="requested-demo"]');
  if (!field || field.value.trim() !== '') {
    return;
  }

  const rawParam = getQueryParam('demo');
  if (!rawParam) {
    return;
  }

  const normalized = decodeURIComponent(rawParam).replace(/[-_]+/g, ' ').trim();
  if (!normalized) {
    return;
  }

  const formatted = `${toTitleCase(normalized)} Demo`;
  field.value = formatted;
}

document.addEventListener('DOMContentLoaded', autofillRequestedDemo);
