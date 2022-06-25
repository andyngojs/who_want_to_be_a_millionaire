<template>
  <div class="container">
    <div class="btnContainer" >
      <button class="btn btn-primary">Play Now</button>
      <button class="btn btn-primary">Create Questions</button>
    </div>

    <div class="footer-container">
      <span class="text-footer">
        © 2021- 2022, Copyright by DobeeTeam. 
      </span>
      <span class="version">Version 1.0.2</span>
    </div>
  </div>
</template>

<script setup></script>

<style>
.container {
  height: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
}
.btnContainer {
  display: flex;
  flex-direction: column;
}
.btn {
  font-size: 1.4rem;
  border-radius: 2.8rem;
  cursor: pointer;
  padding: 1.4rem 2.6rem;
  margin-top: 12px;
}
.btn-primary {
  background-color: var(--primary-color);
  color: var(--white);
}
.btn-primary:hover {
  background-color: var(--secondary-color);
  color: var(--white);
}
.footer-container {
  margin-bottom: 20px;
}
.text-footer {
    font-size: 1.6rem;
  color: var(--white);
  font-weight: 700;
}
.version {
  font-size: 1.6rem;
  color: var(--white);
  font-weight: 700;
}
</style>
