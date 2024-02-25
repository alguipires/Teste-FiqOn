import Swal from 'sweetalert2';

const handleAlert = (message, icon, position) => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end' || position,
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: 'error' || icon,
    title: message,
  });
};

export default handleAlert;
