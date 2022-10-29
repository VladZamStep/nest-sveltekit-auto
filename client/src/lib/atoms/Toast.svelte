<script>
	import { ToastContainer, FlatToast } from 'svelte-toasts';
</script>

<ToastContainer placement="top-center" let:data>
	<FlatToast {data} />
</ToastContainer>
